import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function ScrollToHash() {
    const {hash} = useLocation();
    useEffect(() => {
        if(hash) {
            const id = hash.replace('#', '');
            const targetElement = document.getElementById(id);
            setTimeout(() => {
                if(targetElement)
                    targetElement.scrollIntoView({behavior: "smooth", block: "start"});
            }, 0)
        }
    }, [hash])

    return null;
}