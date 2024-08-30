import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import '../index.css'


function App(){
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobots( users )});
    }, [])
    
    useEffect(() => {
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup: Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 


    // NEW: Method to handle scroll
    const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust the value based on when you want the effect to start
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }


    const onSearchChange = (event) => {
        setSearchfield( event.target.value )
    }
   
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
        <h1 className="righteous-regular">Loading</h1> :
        (
            <div className='tc'>
                <div className={`sticky-top ${isScrolled ? 'scrolled' : ''}`}>
                <h1 className="righteous-regular f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                </div>
                <div className='card-list-container'>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </div>
            </div>
        );
}



export default App;