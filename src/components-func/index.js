import * as  React  from 'react';
import * as ReactDOM  from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you wanna do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    comment ={faker.random.words()}
                    timeAgo ="Today at 6:00PM"  
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    comment ={faker.random.words()}
                    timeAgo ="Today at 5:45PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    comment ={faker.random.words()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    comment ={faker.random.words()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root')) 