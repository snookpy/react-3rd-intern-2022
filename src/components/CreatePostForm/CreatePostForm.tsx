import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import usePostMutate from "../../hooks/usePostMutate/usePostMutate"

export interface ICreatePost {
    body: string
    title: string
    userId: number
}
function CreatePostForm() {

    const {handleSubmit, register, formState: {isSubmitting}} = useForm<ICreatePost>()

    const mutate = usePostMutate()

    const onSubmit: SubmitHandler<ICreatePost> = (values) => {
        mutate.mutate(values)
    }

    const onError: SubmitErrorHandler<ICreatePost> = (errors) => {

    }

    return <div style={{
        border: '1px solid gray',
        margin: 8,
        padding: 8
    }}>
        {mutate.isLoading && 'Creating Post...'}
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <label>Title: </label>
                <input type="text" {...register('title')} />
            </div>

            <div>
                <label>Body: </label>
                <input type="text" {...register('body')} />
            </div>
            <button disabled={mutate.isLoading || isSubmitting}> Submit </button>
        </form>
    </div>
}

export default CreatePostForm