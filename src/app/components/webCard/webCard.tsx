import Image from 'next/image';
import styles from './WebCard.module.css'


import { IWebCardContent } from '@/app/interfaces/IWebCardConent';
import WebCardButton from './webCard_Button/WebCardButton';

const WebCard: React.FC<IWebCardContent> = ({
  imageSrc,
  altText,
  title,
  emphasisText,
  description,
  features,
  websiteLink,
  sourceCodeLink
}) => {
  return (
    <div className={styles.webCard}>
      <Image
        src={imageSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.webCard__content}>
        <div>
        <p className={styles.webCard__title}>{title}</p>
        <p className={styles.webCard__subtitle}>{emphasisText}</p>
        <p className={styles.webCard__description}>{description}</p>
        <p className={styles.webCard__subtitle}>Features I have used</p>
        <ul className={styles.webCard__descriptionBullets}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        </div>
        <div className={styles.webCard__buttons}>
          <WebCardButton text="Go to Website" href={websiteLink}/>
          <WebCardButton text="Source Code" href={sourceCodeLink}/>
        </div>
      </div>
    </div>
  );
}

export default WebCard;
