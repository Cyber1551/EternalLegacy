import './styles.css'
import {ActionIcon, Center, Image, Paper} from "@mantine/core";
import {useLegacy} from "../../contexts/LegacyContext.tsx";
import {IconArrowBigLeft, IconArrowBigRight} from '@tabler/icons-react'


const TimelinePreviewComponent = () => {
    const {currentLegacyContentIndex, onLegacyContentClick, viewingLegacyContent, viewingLegacy} = useLegacy()
    if(viewingLegacyContent.length === 0) return <>No Content</>

    return <div className={'timelinePreviewComponent'}>
        <Center><h2>{viewingLegacy?.legacyName}</h2></Center>
        <Image style={{marginTop: 10}} height={500} fit={'contain'} src={`https://lavender-ambitious-fish-346.mypinata.cloud/ipfs/${viewingLegacyContent[currentLegacyContentIndex]?.contentID}`} />
        <br />
        <Center>
            <ActionIcon onClick={() => onLegacyContentClick(Math.max(currentLegacyContentIndex - 1, 0))}>
                <IconArrowBigLeft />
            </ActionIcon>
            <Paper style={{width: 500}}><Center>{viewingLegacyContent[currentLegacyContentIndex]?.caption}</Center></Paper>
            <ActionIcon onClick={() => onLegacyContentClick(Math.min(currentLegacyContentIndex + 1, viewingLegacyContent.length - 1))}>
                <IconArrowBigRight/>
            </ActionIcon>
        </Center>
    </div>
}

export default TimelinePreviewComponent;