import {  Card, Checkbox} from 'antd';

const ListPermission = (props)=>{
    return(
        <div className="BoxListPM">
            {
                props.data.map(item=>(
                    <Card title={item.name} key={item.idPermissions} bordered={false}>
                        <Checkbox defaultChecked={item.status} />
                    </Card>
                ))
            }
        </div>
    );
}

export default ListPermission