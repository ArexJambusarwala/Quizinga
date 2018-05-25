var answers= [1];
document.question=1;
question=document.question;
document.score=0;
score=document.score;
document.answer=null;
answer=document.answer;
document.noq=1;
noq=document.noq;
function checkAnswer()
{
	if(answer==answers[question-1])
	{
		score=score+10;
	}
	else
	{
		score=score-5;
	}
}

function back(number)
{
	for(var i=1;i<=4;i++)
	{
		if(i==number)
		{
			document.getElementById("option"+i).style.backgroundColor="orange";
			answer=i;
		}
		else
		{
			document.getElementById("option"+i).style.backgroundColor="";
		}
	}
}

function increments()
{
	if(question<noq)
	{
		document.question=document.question+1;
	}
	else
	{
		alert("Your score is "+score);
	}
}