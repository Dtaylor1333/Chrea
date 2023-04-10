import React, { useState } from 'react';

type Event = {
    id: number,
    location: string
    venue_name: string,
    address: string,
    time: string,
    date: Date,
    event_title: string,
    event_flyer: string,
    category: string[],
    promoter_image: string,
    promoter_name: string,
    price: number,
    ages: string,
    directions_url: string,
    votes: number
    attending: boolean
}

export default Event;