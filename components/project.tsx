type props = {
    selected: Boolean,
    onClick: () => void
}

export default function ProjectButton(props: props) {
    return (
        <button onClick={props.onClick} className={`${props.selected ? "bg-slate-300/15" : "hover:bg-slate-300/5" } flex flex-col p-2 rounded w-full`}>
            <p className="font-bold">Note</p>
            <span className="font-extralight text-sm">09/02/2024, 00:22</span>
        </button>
    )
}