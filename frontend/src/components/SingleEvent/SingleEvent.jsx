import React from 'react';
import { EventContainer, EventCell } from './SingleEvent.styles';

export const SingleEvent = ({ event }) => {
	const { firstName, lastName, email } = event;

	return (
		<EventContainer>
			<EventCell>{firstName}</EventCell>
			<EventCell>{lastName}</EventCell>
			<EventCell>{email}</EventCell>
		</EventContainer>
	);
};
