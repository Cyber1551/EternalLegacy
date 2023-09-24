import './styles.css'
import {useLegacy} from "../../contexts/LegacyContext.tsx";
import TimelineThumbnailComponent from "../TimelineThumbnailComponent";
import {Divider, ScrollArea} from "@mantine/core";
import {useEffect, useState} from "react";
import {ILegacyContent} from "../../models/legacyContent.ts";
import {DateType} from "../../models/dateType.ts";

interface IContentGroup {
    title: string;
    content: Array<ILegacyContent>
}

const TimelineComponent = () => {
    const {viewingLegacyContent, viewingLegacy} = useLegacy();
    const [formattedContent, setFormattedContent] = useState<Array<IContentGroup>>([]);

    function getOrdinalSuffix(day: number): string {
        if (day % 10 === 1 && day !== 11) return 'st';
        if (day % 10 === 2 && day !== 12) return 'nd';
        if (day % 10 === 3 && day !== 13) return 'rd';
        return 'th';
    }

    const groupBy = (content: ILegacyContent[], dateType: DateType): IContentGroup[]  => {
        return content.reduce((acc: IContentGroup[], cur: ILegacyContent) => {
            const date = new Date(cur.date);
            let title: string;
            const day = date.getDate();
            console.log("YO " + dateType)
            switch (dateType) {
                case DateType.neither:
                    break
                case DateType.year:
                    title = date.getFullYear().toString();
                    break;
                case DateType.month:
                    title = date.toLocaleString('en-us', { month: 'short', year: 'numeric' });
                    break;
                case DateType.day:
                    title = `${date.toLocaleString('en-us', { month: 'short' })}, ${day}${getOrdinalSuffix(day)} ${date.getFullYear()}`;
                    break;
                case DateType.hour:
                    title = `${date.toLocaleString('en-us', { month: 'short' })}, ${day}${getOrdinalSuffix(day)} ${date.toLocaleString('en-us', { hour: '2-digit', minute: '2-digit', hour12: true })}`;
                    break;
                default:
                    throw new Error('Invalid DateType');
            }

            const found = acc.find(g => g.title === title);
            if (found) {
                found.content.push(cur);
            } else {
                acc.push({ title, content: [cur] });
            }
            return acc;
        }, []);
    }

    useEffect(() => {
        if (viewingLegacy) {

            const groups = groupBy(viewingLegacyContent, viewingLegacy.dateType);
            console.log(groups)
            setFormattedContent(groups);
        }
    }, [viewingLegacy, viewingLegacyContent]);

    return <div className={'timelineComponent'}>
        <ScrollArea style={{height: '100%'}}>
            {viewingLegacy?.dateType === DateType.neither && viewingLegacyContent.map((leg, index) =>
                <TimelineThumbnailComponent key={leg.legacyContentId} legacyContent={leg} index={index} />)}
            {viewingLegacy?.dateType !== DateType.neither && formattedContent.map((group) =>
            {
                return <div key={group.title}>
                    <Divider label={group.title} labelProps={() => ({
                        style: {
                            textAlign: 'center'
                        }
                    })} labelPosition={'center'}/>
                    {group.content.map((leg) => <TimelineThumbnailComponent key={leg.legacyContentId} legacyContent={leg} index={viewingLegacyContent.indexOf(leg)} />)}
                </div>
            })}
        </ScrollArea>
    </div>
}

export default TimelineComponent;