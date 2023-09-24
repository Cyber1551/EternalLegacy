import {Box, Button, Center, Divider, FileButton, Notification, Select, TextInput} from "@mantine/core";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import {useState} from "react";
import './styles.css';
import {useParams} from "react-router-dom";
import {ContentType} from "../../models/contentType.ts";
import {ILegacyContent} from "../../models/legacyContent.ts";
import {IconCheck} from "@tabler/icons-react";

const CreateLegacyScreen = () => {

    const {id} = useParams();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [file, setFile] = useState<File | null>();
    const [caption, setCaption] = useState<string>("");
    const [contentType, setContentType] = useState<ContentType>(ContentType.image);
    const [success, setSuccess] = useState<boolean>(false);
    const isValidId = (strId: string | undefined) => {
        if (strId === undefined) return false;
        return !isNaN(Number(strId));
    }
    const submit = () => {
        if (isValidId(id)) {
            const upload: ILegacyContent = {
                legacyContentId: 0,
                legacyId: Number(id),
                caption: caption,
                date: selectedDate || new Date(),
                contentType: contentType,
                order: 0,
                contentID: ""
            }
            console.log(upload);
            setSuccess(true);

            setFile(null);
            setCaption("");
            setSelectedDate(null)
        }
    }

    return <div style={{width: '100%', height: 'calc(100% - 60px)'}}>
        {success && <Notification icon={<IconCheck size={18} />} onClose={() => setSuccess(false)} color="teal" title="Success">
            Added Content
        </Notification>}
        <br /><br />
        <Center>
        <div style={{width: 500}}>
            <Divider label={"Add Content"} labelPosition={'center'} />
            <br />
            <Select data={[
                "Photo",
                "Video"
            ]} defaultValue={"Photo"} onChange={(e) => {
                switch(e) {
                    case 'Photo':
                        setContentType(ContentType.image);
                        break;
                    case 'Video':
                        setContentType(ContentType.video);
                        break;
                }
            }}/>
            <br />
            <TextInput placeholder={"Caption..."} value={caption} onChange={(e) => setCaption(e.target.value)} />
            <br />
            <FileButton onChange={(e) => setFile(e)} accept="image/png,image/jpeg,video/mp4">
                {(props) => <Box style={{width: 500, height: 125, borderRadius: 15, backgroundColor: "#25262b"}}{...props}><br /><br /><Center>{file ? file.name : "UPLOAD"}</Center></Box>}
            </FileButton>
            <br />
            <DatePicker className={'datePicker'} selected={selectedDate} popperPlacement={'bottom'} onChange={(date) => setSelectedDate(date)} placeholderText={"Date..."}/>
            <br /><br />
            <Center>
            <Button onClick={() => submit()}>Add Content</Button>
            </Center>
        </div>

        </Center>
    </div>
}

export default CreateLegacyScreen;