import { Link, useParams } from "react-router";

const users = [
    { id: 1, name: "John Doe", description: "John Doe is a software engineer" },
    { id: 2, name: "Jane Doe", description: "Jane Doe is a software engineer" },
    { id: 3, name: "John Smith", description: "John Smith is a software engineer" },
    { id: 4, name: "Jane Smith", description: "Jane Smith is a software engineer" },
];

export default function User() {
    const { userId } = useParams();

    const user = users.find(user => user.id === parseInt(userId));

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-200 mb-4" data-gap-block>
                User: {user?.name || "Unknown"}
            </h1>
            <p className="text-gray-400 mb-4">
                Details for user ID: {userId}
            </p>
            <p className="flex flex-col gap-2">
                <span className="font-bold">{user?.name || "Unknown"}</span>
                {user?.description || "No description"}
            </p>

            <Link to="/">
                Go back to home
            </Link>
        </div>
    );
}