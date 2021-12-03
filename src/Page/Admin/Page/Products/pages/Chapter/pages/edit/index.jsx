import { Button, PageHeader } from 'antd';
import axios from 'axios';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from 'react-hook-form';
import { useHistory, useRouteMatch } from 'react-router';
import Swal from 'sweetalert2';
import ChapterApi from '../../../../../../../../api/chapterApi';

const EditChapter = (props) => {
    const match = useRouteMatch();
    const form = useForm();
    const [chapter, setChapter] = useState({})
    const history = useHistory();
   
    let editorState = EditorState.createWithContent(
        ContentState.createFromBlockArray(
            convertFromHTML(props.data.content)
        )
    );
    const [content, setContent] = useState(editorState);

    const onEditorStateChange = (editorState) => {
        setContent(editorState)
    }

    const addContent = async(values) => {
        try{           
            if(chapter.content.value.length < 20) 
                return 'Nhập dài hơn đi má';

                const dataform = {
                    ...values,
                    id:match.params.id,
                    content: chapter.content.value
                }

                await ChapterApi.UpdateChapter(dataform);
                Swal.fire('...', 'Sửa Thành Công!', 'success').then((result) => {
                    if (result.isConfirmed) {
                        history.push(`/admin/products/Listchapter/${props.data.idProduct}`)
                    }
                })
        }catch(err){
            console.log(err);
              Swal.fire('...', 'Có lỗi Xảy ra vui lòng thử lại!', 'error');
        }
    }
    return (
        <div>

            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Nội dung chương"
            />
            <form onSubmit={form.handleSubmit(addContent)}>

            <div style={{minWidth: '300px'}} className="BoxForm">
                <div className="GroupForm">
                    <label htmlFor="nameChapter">Tên Chương</label>
                    <input style={{height: '42px',margin: '10px 0', padding: '10px'}} name="nameChapter" ref={form.register} defaultValue={props.data.nameChapter}></input>
                </div>

                <div className="GroupForm">
                    <label htmlFor="stt">Số Thứ Tự</label>
                    <input style={{height: '42px',margin: '10px 0', padding: '10px'}} name="stt" ref={form.register} defaultValue={props.data.stt}></input>
                </div>
            </div>
            <Editor
                editorState={content}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />
            <textarea
                style={{ width: '100%'}}
                disabled
                ref={(val) => chapter.content = val}
                value={draftToHtml(convertToRaw(content.getCurrentContent()))}
                className="BoxTexChapter"
            />
                <Button htmlType="submit">Lưu</Button>

            </form>

        </div>
    )
}

export default EditChapter
