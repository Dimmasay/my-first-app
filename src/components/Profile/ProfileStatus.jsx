import React from "react";
import style from './Profile.module.css'

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false

    }
    activeMode = () => {
        // console.log('this', this)
        this.setState({
            editMode: true
        })
    }
    deActiveMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
        // alert(this.props.status)
        alert(this.state.status)
    }
    onChangeText = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        console.log(this.state)

        return (
            <div className={style.statusBlock}>
                <div className={style.blockText}>
                    {!this.state.editMode &&
                        <div onDoubleClick={this.activeMode}>{this.props.status || 'Add your status'}</div>
                    }
                </div>
                <div className={style.blockInput}>
                    {this.state.editMode &&
                        <input
                            onChange={this.onChangeText}
                            value={this.state.status}
                            autoFocus={true}
                            onBlur={this.deActiveMode}/>
                    }
                </div>
            </div>
        )
    }
}

export default ProfileStatus;
