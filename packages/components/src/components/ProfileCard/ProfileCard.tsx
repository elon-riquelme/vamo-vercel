import './ProfileCard.scss';
import React from 'react';
// https://loremflickr.com/40/40


interface ProfileCardProps {
	name: string;
	bio: string;
	imgSrc: string;
}

const ProfileCard = ({name, bio, imgSrc}: ProfileCardProps) => {
	return (
		<div className="profile-card">
			<img src={imgSrc} alt="User Profile Image" className="profile-card__image"/>
			<div className="profile-card__info">
				<h2 className="profile-card__name">{name}</h2>
				<p className="profile-card__bio">{bio}</p>
			</div>
    </div>
	);
};

export default ProfileCard;
