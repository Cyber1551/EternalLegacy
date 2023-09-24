import './LegacyComponent.css'
import { FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { ILegacy } from '../../models/legacy';

export interface ILegacyComponent {
    legacy: ILegacy;
}

const LegacyComponent: FC<ILegacyComponent> = ({ legacy }) => {

    return (
        <>
            <div style={{ display: "flex", margin: '20px', gap: 10, alignItems: 'center' }}>
                <div style={{ maxWidth: 120, height: 120, color: 'red', borderStyle: 'solid', flex: 1 }} />
                <div className='legacyComponentFont' style={{ flex: 1, maxWidth: 500 }}>{legacy.name}</div>
                <div className='legacyComponentFont' style={{ flex: 5 }}>Content description</div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 10, maxWidth: 100, justifyContent: 'space-around' }}>
                    <ActionIcon><IconEdit /></ActionIcon>
                    <ActionIcon><IconTrash color='red' /></ActionIcon>
                </div>
            </div>
        </>
    );


};

export default LegacyComponent;