import { useLocation } from "react-router-dom";

const LocationFacility = {
    GetParams: (params) => {
        return new URLSearchParams(useLocation().search);

    }
}
export default LocationFacility;