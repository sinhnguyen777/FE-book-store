import { PageHeader } from 'antd';
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import ChapterApi from '../../../../../../../../api/chapterApi';

const ContentChapter = () => {
    const match = useRouteMatch();
    const [DataChap, setDataChap] = useState();

    useEffect(() => {
        const id = match.params.id;
        const fetchCataByID = async (idCata) => {
            const res = await ChapterApi.GetChapterByIdProduct(id)
            return setDataChap(res.data);;
        }

        fetchCataByID(id)
    }, [])
    return (
        <div>

            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Nội dung chương"
            />
            bỏ cái thư viện vào đây
        </div>
    )
}

export default ContentChapter
