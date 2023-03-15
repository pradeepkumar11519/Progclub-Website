
import { getServerSideSitemapIndexLegacy,getServerSideSitemapLegacy } from "next-sitemap";
import { fetchAllTeamMembers } from "../TeamPage";

export default function Site() {
  
}




export const getServerSideProps = async (ctx) =>{
    const data = await fetchAllTeamMembers()
    console.log(data);
    const fields = data
    console.log(fields);
    return getServerSideSitemapLegacy(ctx,fields)
}