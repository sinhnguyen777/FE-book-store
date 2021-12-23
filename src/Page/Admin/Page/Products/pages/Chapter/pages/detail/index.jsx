import { ContentState, convertFromHTML, EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router';
import ChapterApi from '../../../../../../../../api/chapterApi';
import EditChapter from '../edit/index'

const ContentChapter = () => {
    const match = useRouteMatch();
    const form = useForm();
    const [DataChap, setDataChap] = useState();
    const [chapter, setChapter] = useState({})
   
    useEffect(() => {
        const id = match.params.id;
        const fetchGetChapter = async (id) => {
            const res = await ChapterApi.GetCataById(id)
            return setDataChap(res.data);;
        }

        fetchGetChapter(id)
    }, [])
    return (
        <div className="ChapterPage">
            {
                DataChap
                ?
                    <EditChapter data={DataChap} ></EditChapter>
                :
                null
            }
        </div>
    )
}

export default ContentChapter
