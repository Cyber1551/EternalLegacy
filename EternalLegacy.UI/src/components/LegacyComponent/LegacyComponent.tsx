import './LegacyComponent.css'
import {FC, useEffect, useState} from 'react'
import { ActionIcon } from '@mantine/core'
import { IconEdit, IconTrash, IconCloudUpload } from '@tabler/icons-react'
import { ILegacy } from '../../models/legacy';
import {getLegacyContentForLegacy} from "../../services/legacy.service.ts";
import {useNavigate} from "react-router-dom";

export interface ILegacyComponent {
    legacy: ILegacy;
}

const LegacyComponent: FC<ILegacyComponent> = ({ legacy }) => {
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        getLegacyContentForLegacy(legacy.legacyId).then(content => {
            if (content.length > 0) {
                setImage(`https://lavender-ambitious-fish-346.mypinata.cloud/ipfs/${content[0]?.contentId}`);
            }
            else {
                setImage("")
            }

        })
    }, []);

    const navigate = useNavigate();
    return (
        <>
            <div style={{ display: "flex", margin: '20px', gap: 10, alignItems: 'center' }} >
                <img style={{ maxWidth: 120, height: 120, borderStyle: 'solid', flex: 1 }} src={image} onClick={() => navigate(`/${legacy.legacyId}`)}/>
                <div className='legacyComponentFont' style={{ flex: 5 }}>{legacy.name}</div>
                {/*<div className='legacyComponentFont' style={{ flex: 5 }}>{legacy.}</div>*/}

                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 10, maxWidth: 100, justifyContent: 'space-around' }}>
                    <ActionIcon><IconCloudUpload onClick={() => navigate(`/edit/${legacy.legacyId}`)} /></ActionIcon>
                    <ActionIcon><IconTrash color='red' /></ActionIcon>
                </div>
            </div>
        </>
    );


};

export default LegacyComponent;