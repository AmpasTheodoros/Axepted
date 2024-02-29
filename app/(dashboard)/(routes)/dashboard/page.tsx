import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            <h1>Landing Page (Protected)</h1>
            <UserButton afterSignOutUrl="/"></UserButton>
        </div>
    )
}

export default DashboardPage;