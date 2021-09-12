import React, {ChangeEvent, Component, FormEvent} from "react"
import {Api} from "../API"
import Form from "./Form"
import FormField from "./FormField"
import FormButton from "./FormButton"
import FormHeader from "./FormHeader"
import "../styles/AdminPanel.scss"

interface IState {
    title: string;
    content: string;
    files: any
}

class AdminPanel extends Component<any, IState> {
    constructor(props: any) {
        super(props)

        this.state = {
            title: "",
            content: "",
            files: [],
        }
    }

    async handleSubmit(event: FormEvent) {
        event.preventDefault()
        const {title, content, files} = this.state
        const formData = new FormData(event.target as HTMLFormElement)
        const response = await Api.insertPost(formData)
        console.log(response)
    }

    render() {
        return (
            <div className={"panel-wrapper"}>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormHeader>upload post</FormHeader>

                    <FormField name={"title"} text={"title"}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({title: e.target.value})}
                    />

                    <FormField name={"content"} text={"post content"} as={"textarea"}
                               onChange={(e: ChangeEvent<HTMLTextAreaElement>) => this.setState({content: e.target.value})}
                    />

                    <FormField name={"files"} text={"upload photos"} as={"file"}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({files: e.target.files})}
                    />

                    <FormButton variant={"primary"}>submit</FormButton>
                </Form>
            </div>
        )
    }
}

export default AdminPanel