export const meta = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

export default function Index() {
    return (
        <div className="p-4">
            <h1>Hello world</h1>
        </div>
    )
}
