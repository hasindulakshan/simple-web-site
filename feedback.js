/*const app = new Vue({
    el: '#feedback-form',
    data: {
        name: '',
        email: '',
        message: '',
    },
    methods: {
        submitForm() {

            axios.post('/api/feedback', {
                name: this.name,
                email: this.email,
                message: this.message,
            })
                .then(response => {
                    console.log(response.data);
                    alert('Thank you for your feedback!');
                })
                .catch(error => {
                    console.log(error);
                    alert('Error submitting feedback.');
                });
        },
    },
});*/
const app = new Vue({
    el: '.comment-box',
    data: {
        comments: [
            {
                name: 'John veak',
                date: '3/22/2023',
                comment: 'Nice!'
            },
            {
                name: 'nero',
                date: '3/23/2023',
                comment: 'Good Job.'
            }
        ],
        newComment: {
            name: '',
            comment: ''
        }
    },
    methods: {
        addComment() {
            const date = new Date().toLocaleDateString();
            const newComment = {
                name: this.newComment.name,
                date: date,
                comment: this.newComment.comment
            };
            this.comments.push(newComment);
            this.newComment.name = '';
            this.newComment.comment = '';
        }
    }
});
