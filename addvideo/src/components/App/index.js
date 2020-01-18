import React, {useState} from 'react';
import {Button , Input} from 'antd'
import {Video} from '../../components'

const App = () => {
    // const [video, setVideo] = useState([]);
    let videosId = [];
    
    const [src, setSrc] = useState('')    
    const [youtube, setYoutube] = useState(false);
    const [id, setId] = useState('')
    const videos = videosId.map((item, idx)=> {
        return <Video id={item.id} youtube={item.youtube} key={idx}/>
    })

    const addVideo = () => {
        
        if(src.includes('vimeo')) {
            let vimeoId = src.slice(src.indexOf('vimeo')+10)            
            setId(vimeoId)            
            setYoutube(false)
            console.log('vimeo=',vimeoId)
            setSrc('')
        }
        if(src.includes('youtube')) {
            let youId = src.slice(src.indexOf('watch?v=')+8)
            setId(youId)
            setYoutube(true)
            setSrc('')
            console.log('youtube=',youId)
        }   
        // console.log(videosId)
    }
    return (
        <div>
            <Input 
                value={src}
                onChange = {(e)=> setSrc(e.target.value)}
                placeholder='Вставьте ссылку с youtube или vimeo'
                style={{width: 500}}
            />
            <Button type="primary" onClick={()=>addVideo()}>Добавить</Button>
            <Video id={id} youtube={youtube}/>
            {/* {videos} */}
        </div>
    )
}

export default App;