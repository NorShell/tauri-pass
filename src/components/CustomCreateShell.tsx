import { Command } from '@tauri-apps/plugin-shell';
// when using `"withGlobalTauri": true`, you may use
// const { Command } = window.__TAURI__.shell;

function parsePassOutput(output: string) {
  const lines = output.split('\n');
  const categories = lines
    .filter(line => line.includes('[01;34m'))
    .map(line => line.match(/\[01;34m(.+?)\[0m/)?.[1])
    .filter(Boolean);

  const passwords = lines
    .filter(line => !line.includes('[01;34m') && line.trim().length > 0 && !line.includes('├') && !line.includes('│') && !line.includes('└'))
    .map(line => line.trim());

  return { categories, passwords };
}

export default function CustomCreateShell() {

  async function executeShell() {
    console.log("function is called")
    let result = await Command.create('pass-cmd').execute();
    console.log(result.stdout);
    const { categories, passwords } = parsePassOutput(result.stdout)
    console.log(categories, passwords)
    console.log("Function ended");
  }

  return <button onClick={executeShell} >Execute Shell</button>

}
