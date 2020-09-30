import React from "react";
import axios from "axios";
import "./app.css";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedFile: null
    };
  }
  onChanged = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
    console.log(event.target.files[0]);
}
onClickHandler = () => {
  const data = new FormData()
  data.append('file', this.state.selectedFile)
  axios.post("http://localhost:8000/upload", data, { })
  .then(res => { // then print response status
    console.log(res.statusText)
 })
 alert("you have successful upload the file")
}
  render() {
    return (
      <div className="Container">
        <h2>File Uploader</h2>
        <div className='center'>
        <h2>Select the File to Upload</h2>
    
          <input
            name="file"
            type="file"
            className="form-control" multiple
            value={this.state.file}
            onChange={this.onChanged}
          />
          <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
          </div> <br/>
      </div>
    );
  }
}
export default App;