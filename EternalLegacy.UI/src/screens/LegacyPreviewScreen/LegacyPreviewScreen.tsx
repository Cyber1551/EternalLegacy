import {useParams} from "react-router-dom";
import {useLegacy} from "../../contexts/LegacyContext.tsx";
import {useEffect} from "react";
import TimelineComponent from "../../components/TimelineComponent";
import TimelinePreviewComponent from "../../components/ TimelinePreviewComponent";
import './styles.css';

const LegacyPreviewScreen = () => {
    const {id} = useParams();
    const {viewingLegacy, changeViewingLegacy} = useLegacy();



    const isValidId = (strId: string | undefined) => {
        if (strId === undefined) return false;
        return !isNaN(Number(strId));
    }

    useEffect(() => {
        if (isValidId(id)) {
            changeViewingLegacy(Number(id));
        }
    }, [id])

    if (viewingLegacy === undefined) {
        return <div>legacy not found</div>
    }
    else {
        return <div className={'previewScreenWrapper'}>
            <TimelineComponent />
            <TimelinePreviewComponent />
        </div>
    }


    // if (isValidId(id)) {
    //     const leg = legacies.find(l => l.legacyId === Number(id));
    //     if (leg === undefined) return <div>Legacy Not Found</div>
    //     setViewingLegacy(leg);
    //     return <div>{JSON.stringify(viewingLegacy)}</div>
    // }
    // else {
    //     return <div>Invalid Id</div>
    // }
}

export default LegacyPreviewScreen;