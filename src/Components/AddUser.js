import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      Permission:""
    }
  }
  

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);

    this.setState({
      [name]:value
    })
    //package to item
    // var item = {};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.tel = this.state.tel;
    // item.Permission = this.state.Permission;
    // console.log(item);
  }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         trangThaiChinhSua : false
    //     }
    // }

    // thayDoiTrangThai = () => {
    //     this.setState({
    //         trangThaiChinhSua : !this.state.trangThaiChinhSua
    //     })
    // }
    
    // hienThiNut = () => {
    //     if(this.state.trangThaiChinhSua === true){
    //         return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng lại</div>
    //     }
    //     else {
    //         return  <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div> 
    //     }
    // }

    // hienThiForm = () => {
    //     if(this.state.trangThaiChinhSua === true){
    //         return (
    //             <div className="card border-primary mb-3 mt-2">
    //           <div className="card-header">Thêm mới user vào hệ thống</div>
    //           <div className="card-body text-primary">
    //             <div className="form-group">
    //               <input
    //                 type="text"
    //                 className="form-control"
                   
    //                 placeholder="Tên user"
    //               />
    //             </div>
    //             <div className="form-group">
    //               <input
    //                 type="text"
    //                 className="form-control"
                   
    //                 placeholder="Điện thoại"
    //               />
    //             </div>
    //             <div className="form-group">
    //               <select className="custom-select" required="">
    //                 <option value="">Chọn quyền mặc định</option>
    //                 <option value={1}>Admin</option>
    //                 <option value={2}>Moderator</option>
    //                 <option value={3}>Normal</option>
    //               </select>
    //             </div>
    //             <div className="form-group">
    //               <div className="btn btn-block btn-primary">Thêm mới</div>
    //             </div>
    //           </div>
    //         </div>
    //         )
    //     }
       
    // }

    kiemTraTrangThai = () => {
      if (this.props.hienThiForm === true){
        return (<div className="col">
          <form method="post">
          <div className="card border-primary mb-3 mt-2">
              <div className="card-header">Thêm mới user vào hệ thống</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event)=>this.isChange(event)}
                    name="name"
                    placeholder="Tên user"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event)=>this.isChange(event)}
                    name="tel"
                    placeholder="Điện thoại"
                  />
                </div>
                <div className="form-group">
                  <select className="custom-select" onChange={(event)=>this.isChange(event)} name="Permission" required="">
                    <option value="">Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input className="btn btn-block btn-primary" onClick={(name,tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)} type='reset' value='Thêm mới'/>
                </div>
              </div>
            </div>
            </form>
            </div>
        )
      }
    }

    render() {
        return (
            <div>

            {/* {this.hienThiNut()}
            {this.hienThiForm()} */}

            {this.kiemTraTrangThai()}
            
            
            </div>
        );
    }
}

export default AddUser;