import React, { useEffect, useState} from "react";
import { Bar } from 'react-chartjs-2'
import statisticalApi from "../../../../../api/statistical";

const BoxChart =  () =>{

    const [Datalabels, setDatalabels] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
       const fetchGetChart = async () => {
            const res = await statisticalApi.GetDataChart();
            res.data.map(item=>{
                const newData = data;
                newData.push(item.Total)
                const newDatalabels = Datalabels
                newDatalabels.push(`${item._id.Date}-${item._id.Month}`)
                setData(newData); 
                setDatalabels(newDatalabels)
            })
       }
       fetchGetChart()
    }, [])


    return(
        <div className="BoxChart">
            <h1>Biểu đồ đơn hàng theo ngày</h1>
            <Bar
                data= {{
                    labels: Datalabels,
                    datasets: [{
                        label: '# of Votes',
                        data:data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={200}
                width={600}
            />
        </div>
    );
}

export default BoxChart