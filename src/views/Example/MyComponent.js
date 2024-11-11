import React from 'react';
import AddComponent from './AddComponent';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'job01', name: 'Lee Dang', salary: '3000' },
            { id: 'job02', name: 'Lê Hải Đăng', salary: '2000' },
            { id: 'job03', name: 'Lê Hẻ Đen', salary: '4000' },
            { id: 'job04', name: 'LÊ HẢI ĐĂNG', salary: '4000' },
            { id: 'job05', name: 'LÊ ĐĂNG', salary: '300' },
        ]
    }
    removeJob = (job) => {
        let newJob = this.state.arrJobs.filter((item) => item.id != job.id);
        this.setState({
            arrJobs: newJob
        })
    }

    componentDidMount() {
        //Định nghĩa dữ liệu ví dụ get API
        console.log('Did Mount');
    }
    componentDidUpdate(prevProps, prevState) {
        // Sau khi cập nhật state, props thứ tự tham số phải đúng
        console.log('Did update, prevstate: ', prevState, ' props:', prevProps, ' current:', this.state);
    }


    addJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {
        return (
            <div>
                <AddComponent addJob={this.addJob} />
                <ChildComponent arrJobs={this.state.arrJobs} removeJob={this.removeJob} />
            </div>
        )
    }
};

export default MyComponent;