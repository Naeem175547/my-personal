import { useSubscription } from "@apollo/client/react";
import { NEW_POST } from "../graphql/subscribtion";

export default function Notification() {
    const { data, loading, error } = useSubscription(NEW_POST);
    if (data) {

        return alert('new post is inserted..')
    }

    console.log(data)
    return (
        <div>
            {data?.newPost && (
                <p>
                    🔔 New Post: {data.newPost.title}
                </p>
            )}
        </div>
    );
}