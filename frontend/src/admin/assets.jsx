import AssetTable from "../components/AssetTable";
import SectionCard from "../components/SectionCard";

const AdminAssets = () => {
    return (
        <SectionCard title="All Assets">
            <p>This page would display a comprehensive list of all assets, with filtering, searching, and detailed actions.</p>
            // {/* AssetTable component could be integrated here */}
           <AssetTable />
         </SectionCard>
    );
};
export default AdminAssets