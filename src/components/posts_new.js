import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions'

class PostsNew extends Component {
  renderField = (field) => {
    const {touched, error} = field.meta
    const className = `form-group ${(touched && error) ? 'has-danger' : null}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {
            touched
              ? error
              : null
          }
        </div>
      </div>
    )
  }
  onSubmit = (values) => {
    console.log('values are: ', values)
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const {handleSubmit} = this.props

    return (
      // HandleSubmit takes care of form validation and changing the state
      // If everything is OK, run the callback (onSubmit) to implement logic outside the form
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}

  // validate inputs
  if (!values.title) {
    errors.title = 'Enter a title!'
  }
  if (values.title && values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters!'
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories!'
  }
  if (!values.content) {
    errors.content = 'Enter some content!'
  }

  // if errors is empty the form is fine to sumbit
  // if error has ANY properties, redux form assumes form is invalid
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
)
