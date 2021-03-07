import React from 'react'
import { CollaboratorsList } from 'react-component-collaborators'
import { CardComplete } from 'react-component-collaborators'

import {
  // BrowserView,
  // MobileView,
  // isBrowser,
  isMobile
} from "react-device-detect";

const Members = () => {

  let listStyleObject = {
    listWidth: '1300px',
    listHeight: '800px',
    direction: 'vertical',
    listBackgroundColor: '#000'
  }

  let listStyleObjectMobile = {
    listWidth: '320px',
    listHeight: '800px',
    direction: 'vertical',
    listBackgroundColor: '#000'
  }

  const borderImage = {
    width: '4px',
    style: 'solid',
    color: '#800e34'
  }
  const borderCard = {
    width: '4px',
    style: 'solid',
    color: '#800e34'
  }

  let cardStyleObject = {
    cardWidth: '360px',
    cardHeight: '200px',
    cardBackgroundColor: '#e17e23',
    textAlign: 'center',
    imageFormat: 'circle',
    borderImage: borderImage,
    borderCard: borderCard,
    titleColor: '#000',
    descriptionColor: '#000',
    imageWidth: '100px',
    imageHeight: '100px',
    fontSizeTitle: '100%',
    paddingTitle: '0px 0px 20px 0px',
    marginTitle: '0px 0px 0px 0px',
    fontSizeDescription: '80%',
    paddingDescription: '0px 0px 0px 0px',
    marginDescription: '0px 0px 0px 0px'
  }

  let cardStyleObjectMobile = {
    cardWidth: '260px',
    cardHeight: '200px',
    cardBackgroundColor: '#e17e23',
    textAlign: 'center',
    imageFormat: 'circle',
    borderImage: borderImage,
    borderCard: borderCard,
    titleColor: '#000',
    descriptionColor: '#000',
    imageWidth: '100px',
    imageHeight: '100px',
    fontSizeTitle: '100%',
    paddingTitle: '0px 0px 20px 0px',
    marginTitle: '0px 0px 0px 0px',
    fontSizeDescription: '80%',
    paddingDescription: '0px 0px 0px 0px',
    marginDescription: '0px 0px 0px 0px'
  }

  

  let imagePosition = "left"
  let collaboratorsArray = [
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/tolgay.jpg',
      title: 'Abbas Tolgay Yilmaz @ Hamburg, DE',
      description: 'software developer, visual artist, game theorist and many more'
    },
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/zari.png',
      title: 'Zari Harat @ Hamburg, DE',
      description: 'painter, healer, teacher, creative coach and many more'
    },
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/tanja.jpeg',
      title: 'Tanja Taechanurug @ Hamburg, DE',
      description: 'designer, illustrator and many more'
    },    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/mikey.jpg',
      title: 'Mikey Goodfire @ Amsterdam, NL',
      description: 'musician, performance artist and many more'
    },
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/tina.png',
      title: 'Tina Marquardt @ Bochum, DE',
      description: 'blockchain & istributed governance researcher, entrepreneur and many more'
    },
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/vasilis.png',
      title: 'Vasilis Spilka @ Prague, CZ',
      description: 'software architect and many more'
    },
    {
      image:
        'https://i.imgur.com/PmFMNdc.png',
      title: 'Sharon Lomanno @ Sersale, IT',
      description: 'art director, scientist, photographer, videographer and many more'
    },
    {
      image:
        'https://i.imgur.com/YSVq4C1.png',
      title: 'Sabrina De Mitri @ Brindisi, IT',
      description: 'saxophone player, song writer, singer, sacking vocal, fx, loopmaker, samples maker, radio presenter, producer and event manager, writer, educator, consciousness and many more',
    },
    {
      image:
        'https://i.imgur.com/ZUwnvHZ.png',
      title: 'Jannik Bessert @ Hamburg, DE',
      description: 'audio engineer and many more'
    },
    {
      image:
        'https://i.imgur.com/EgM5oOq.png',
      title: 'Emin Araç @ İzmir, TR',
      description: 'documentary, portrait and street photography vinyl records & collectibles - collect and deal ex live broadcast tv host - interview/talk show and many more'
      
    },
    {
      image:
        'https://i.imgur.com/i11KbWY.png',
      title: 'Thomas Prüdom @ Paris, FR',
      description: 'political science & international relations, activism, non-governmental-organisations and more'
    }
  ]

  if(isMobile){
    return (
    
      <CollaboratorsList
      collaboratorsArray={shuffle(collaboratorsArray)}
      listStyleObject={listStyleObjectMobile}
    >
      <CardComplete
      cardStyleObject={cardStyleObjectMobile}
      imagePosition={imagePosition}
    />
    </CollaboratorsList>
    );
  }

  return (
    
    <CollaboratorsList
    collaboratorsArray={shuffle(collaboratorsArray)}
    listStyleObject={listStyleObject}
    >
    
      <CardComplete
      cardStyleObject={cardStyleObject}
      imagePosition={imagePosition}
      />
      
    </CollaboratorsList>
  );


};

// everyday we are shuffling.
function shuffle(collaboratorsArray) {
  return collaboratorsArray.sort(() => Math.random() - 0.42);
}


export default Members;
