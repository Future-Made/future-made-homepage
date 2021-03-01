import React, { Component } from 'react'
import { CollaboratorsList } from 'react-component-collaborators'
import { CardComplete } from 'react-component-collaborators'
import { CardMinimal } from 'react-component-collaborators'

const Members = () => {

  let listStyleObject = {
    listWidth: '1200px',
    listHeight: '600px',
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
    cardWidth: '280px',
    cardHeight: '140px',
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
      title: 'Abbas Tolgay Yilmaz',
      description: 'Software Engineer, Visual Artist, Game Theorist'
    },
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/zari.png',
      title: 'Zari Harat',
      description: 'Painter, traveler, healer, teacher, creative coach'
    },
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/tanja.jpeg',
      title: 'Tanja Taechanurug',
      description: 'Designer, Illustrator'
    },    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/mikey.jpg',
      title: 'Mikey Goodfire',
      description: 'Musician, Traveler'
    },
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/tina.png',
      title: 'Tina Marquardt',
      description: 'blockchain & distributed governance researcher, entrepreneur'
    },
    {
      image:
        'https://offsetmovement.org/FutureMade_files/collaborators/vasilis.png',
      title: 'Vasilis Spilka',
      description: 'Software Architect'
    },
    {
      image:
        'https://i.imgur.com/PmFMNdc.png',
      title: 'Sharon Lomanno',
      description: 'Art Director, Scientist, Photographer, Videographer'
    },
    {
      image:
        'https://i.imgur.com/YSVq4C1.png',
      title: 'Sabrina De Mitri',
      description: 'Musician'
    },
    {
      image:
        'https://i.imgur.com/ZUwnvHZ.png',
      title: 'Jannik Bessert',
      description: 'Audio Engineer'
    },
    {
      image:
        'https://i.imgur.com/EgM5oOq.png',
      title: 'Emin Araç',
      description: 'Photographer, Traveler'
    }
  ]
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
