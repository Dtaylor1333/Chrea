import React, { useState } from 'react';

type Event = {
    event_flyer: string;
    event_title: string;
    category: string[];
    venue_type: string;
    start_time: string;
    end_time: string;
    location: string;
    date: Date;
    venue_name: string;
    promoter: string;
    promoter_image: string;
    price: number;
    ages: number ;
    directions_url: string;
    votes: number;
}

export default Event;