import React, { useEffect, useState } from 'react';

const useMeals = (searchtext) => {
    const [meals, setMeals] = useState([])
    let smallText = searchtext.toLowerCase()
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                const matched = data.filter(meal => meal.type.includes(smallText))
                if (searchtext) {
                    setMeals(matched)
                }
            })
    }, [searchtext])
    return [meals, setMeals];
};

export default useMeals;