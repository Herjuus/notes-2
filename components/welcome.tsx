"use client";

import { useState } from "react";
import { open } from '@tauri-apps/api/dialog';
import { Config, createConfig, loadConfig, saveConfig } from "@/lib/fs";
import { FolderOpen } from "lucide-react";

type Props = {
    setConfig: Function,
}

export default function WelcomePage(props: Props) {
    const [directoryPath, setDirectoryPath] = useState("");

    async function openDir() {
        const directory = await open({
          directory: true,
          title: "Open notes directory",
        });
    
        if (directory !== null) {
          setDirectoryPath(directory)
        }
    }

    async function handleSave() {
        await saveConfig(directoryPath)
        .then((config) => props.setConfig(config))
        .then((config) => console.log(config));
    }

    return (
        <div className="w-screen h-screen fixed z-10 flex justify-center items-center">
            <div className="z-20 p-5 bg-slate-300/20 rounded drop-shadow-md w-80 space-y-2">
                <h1 className="text-2xl font-bold text-center">Welcome</h1>
                <div className="space-y-1">
                    <span className="text-xs">Notes path</span>
                    <div className="flex justify-between gap-1 font-light">
                        <input disabled value={directoryPath} onChange={(e) => setDirectoryPath(e.target.value)} type="text" className="outline-none rounded px-2 text-xs bg-gray-950/10 flex-1" />
                        <button className="bg-gray-950/10 hover:bg-gray-950/15 text-sm h-fit p-1 rounded aspect-square text-gray-100" onClick={() => openDir()}><FolderOpen strokeWidth={1}/></button>
                    </div>
                </div> 
                <button onClick={handleSave} className="bg-gray-950/10 hover:bg-gray-950/15 text-sm h-fit p-1 rounded text-gray-100 w-full">Save</button>
            </div>
            {/* <div className="backdrop-blur-[4px] h-screen w-screen absolute"></div> */}
        </div>
    )
}