import React, { useEffect } from 'react'
import axios from 'axios'

const TwitterTweets = () => {


    const fetchTweets= async ()=>{
        try{
            let userid=29104749;
            const response = await axios.get(`https://api.twitter.com/2/users/${userid}/tweets`, {
                headers: {
                  Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAG0avAEAAAAA6GdPnb55%2Fw5xQoSKr0IndC1K%2BZA%3Du1fjMvqIVu3BstFuF2KAIzWGOfyY0pKAyuy64HrEyH8BQ8sMi6`,
                }
            });
            console.log(response.data.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchTweets();
    })

  return (
    <>
      
    </>
  )
}

export default TwitterTweets
