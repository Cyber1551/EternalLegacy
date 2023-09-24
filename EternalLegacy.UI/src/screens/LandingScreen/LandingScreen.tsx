import { Center, Container, Paper, Title } from '@mantine/core';

//import style from './styles.css?inline';
const AddTalkingAvatar = () => {
  SDK.applicationId = '6837137626788076684';
  let sdk = new SDKConnection();
  let web = new WebAvatar();
  web.version = 8.5;
  web.connection = sdk;
  web.avatar = '12043140';
  web.nativeVoiceName = 'Microsoft Mark - English (United States)';
  web.nativeVoice = true;
  web.boxLocation = 'bottom-right';
  web.width = '330';
  web.background = 'ivory';
  web.createBox();
  web.addMessage(
    'Hello, Glad you are here to meet me! I live here forever so that you can meet me whenever you want! I am with you! ',
    'love',
    '',
    ''
  );
  web.processMessages();
};
const LandingScreen = () => {
  AddTalkingAvatar();

  return (
    <Container size='md'>
      {/* <Center> */}
      <div>
        <h1>
          Welcome to Eternal Legacy: Preserving the Memories of Our Loved Ones
          for Today and Tomorrow{' '}
        </h1>

        <p>
          {' '}
          Losing a loved one is one of the most difficult experiences a person
          can go through. But while you may not be able to replace the person
          you've lost, you can keep their memory alive by cherishing the moments
          you shared together. And at Eternal Legacy, we believe that everyone
          deserves to have their legacy preserved.{' '}
        </p>
        <br />
        <p>
          That's why we offer a variety of tools and resources to help you
          create a lasting tribute to the people you love, including:
        </p>
        <ul>
          <li>
            <b>Online memorial pages</b>: Create a personalized memorial page
            for your loved one where you can share photos, videos, stories, and
            more.{' '}
          </li>
          <li>
            <b>Digital photo albums</b>: Curate photo albums of your favorite
            memories with your loved one, and add captions and descriptions to
            tell the stories behind the photos.{' '}
          </li>
          <li>
            {' '}
            <b>Video tributes</b>: Create a video tribute to your loved one by
            compiling clips of them from home movies, vacations, and other
            special occasions.{' '}
          </li>
          <li>
            <b>Guestbooks</b>: Allow friends and family to leave messages and
            memories on your loved one's memorial page.
          </li>
          <li>
            {' '}
            <b>Time capsules</b>: Create a time capsule to share with your loved
            one in the future. Add photos, videos, letters, and other items that
            you want them to see and remember.
          </li>
        </ul>

        <p>
          {' '}
          At Eternal Legacy, we're here to help you honor the memory of your
          loved one in a way that is meaningful to you. We believe that
          everyone's legacy should be preserved, and we're here to help you make
          that happen.
        </p>
        <h2>
          {' '}
          <i>
            Create a lasting tribute to your loved one today, and leave them
            with a gift to cherish for years to come.
          </i>
        </h2>
      </div>
      {/* </Center> */}
    </Container>
  );
};
export default LandingScreen;
