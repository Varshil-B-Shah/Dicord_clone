import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

const SetupPage = async () => {
    const profile = await initialProfile();

    // const server = await db.server.findFirst({
    //     where:{
    //         members
    //     }
    // })

    return <div>Create a Server</div>;
}
 
export default SetupPage;