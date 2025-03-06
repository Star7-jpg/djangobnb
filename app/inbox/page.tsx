import Conversartion from "../components/inbox/Conversation";

const InboxPage = () => {
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">My Inbox page</h1>
            <Conversartion />
            <Conversartion />
            <Conversartion />
        </main>
    )
}

export default InboxPage;