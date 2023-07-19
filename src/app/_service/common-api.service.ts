import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestData } from '../dashboard/users/user';
import { RequestLessonPlan } from '../dashboard/lesson-plan/lesson-plan';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})


export class CommonApiService {
  constructor(private http: HttpClient,
    private cookieService: CookieService,) { }

  loginApi(email: string, password: string): Observable<any> {
    return this.http.post(environment.userLogin, { email, password }, { withCredentials: true});
  }

  getProfile(): Observable<any> {
    return this.http.get(environment.profile, { withCredentials: true });
  }

  logoutApi(): Observable<any> {
    return this.http.post(environment.logout,{}, { withCredentials: true });
  }

  allUsersApi(page: number, limit: number): Observable<any> {
    return this.http.get(environment.allUser + '?page=' + page + '&limit=' + limit, { withCredentials: true });
  }

  addNewUserApi(data: RequestData) {
    return this.http.post(environment.addNewUser, data, { withCredentials: true });
  }


  allLessonPlanApi(page: number, limit: number): Observable<any> {
    return this.http.get(environment.allLessonPlan + '?page=' + page + '&limit=' + limit, { withCredentials: true })
  }

  createNewLessonPlan(data: any): Observable<any> {
    return this.http.post(environment.createLessonPlan, data, { withCredentials: true });
  }
  allModelConstructivistApi(page: number, limit: number): Observable<any> {
    return this.http.get(environment.allModelConstructivist + '?page=' + page + '&limit=' + limit, { withCredentials: true });
  }
  allBehavioristApi(page: number, limit: number): Observable<any> {
    return this.http.get(environment.allBehaviorist + '?page=' + page + '&limit=' + limit, { withCredentials: true });
  }
  allExperientialApi(page: number, limit: number): Observable<any> {
    return this.http.get(environment.allExperiential + '?page=' + page + '&limit=' + limit, { withCredentials: true });
  }



  getModelConstructivistApi(id: string): Observable<any> {
    return this.http.get(environment.getModelConstructivist + "/" + id, { withCredentials: true });
  }
  getBehavioristApi(id: string): Observable<any> {
    return this.http.get(environment.getBehaviorist + "/" + id, { withCredentials: true });
  }
  getExperientialApi(id: string): Observable<any> {
    return this.http.get(environment.getExperiential + "/" + id, { withCredentials: true });
  }

  createAssessmentApi(data: any): Observable<any> {
    return this.http.post(environment.createAssessment, data, { withCredentials: true });
  }

  updateProfilePicApi(data: any): Observable<any> {
    return this.http.put(environment.updateProfilePic, data, { withCredentials: true });
  }


  createBehavioristApi(data: any): Observable<any> {
    return this.http.post(environment.createBehaviorist, data, { withCredentials: true });
  }

  createModelConstructivistApi(data: any): Observable<any> {
    return this.http.post(environment.createModelConstructivist, data, { withCredentials: true });
  }
  createExperientialApi(data: any): Observable<any> {
    return this.http.post(environment.createExperiential, data, { withCredentials: true });
  }



  assessmentFormData =
    {
      "Planning & Organizing Skills": [
        {
          skill_type: "1.1 The Lesson Plan includes achievable objectives, aims & targets based on the prior knowledge of the students according to the learning needs of the students",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teacher designs a lesson plan including aims, objectives, and targets without considering the learning needs and without considering the prior knowledge of the students.'
            },
            {
              remark: 2,
              remark_description: 'The teacher designs the lesson plan including aims, objectives, and targets common to the general idea of designing. They are cautious about the learning needs of the students.'
            },
            {
              remark: 3,
              remark_description: 'The teacher designs the lesson plan including aims, objectives, and targets according to the prior knowledge of the students. They are seldom cautious about the learning needs of the students.'
            },
            {
              remark: 4,
              remark_description: 'The teacher designs the lesson plan including aims, objectives, and targets according to the student’s prior knowledge They are cautious about the learning needs of the students.'
            },
          ]
        },
        {
          skill_type: "1.2 The instructional strategies are planned, organized, and aligned with the objectives, aims & targets of the lesson",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The instructional strategies are completely opposite to the aims, and objectives of the lesson.'
            },
            {
              remark: 2,
              remark_description: 'Opposite to the lesson’s aims and objectives'
            },
            {
              remark: 3,
              remark_description: 'Opposite to the lesson’s aims and objectives'
            },
            {
              remark: 4,
              remark_description: 'The instructional strategies are designed according to the aims, objectives & targets of the lesson'
            },
          ]
        },
        {
          skill_type: "1.3 The lesson plan includes well-planned activities that facilitate higher-order thinking",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The activities included in the lesson plan are opposite to the lesson and do not facilitate higher-order thinking.'
            },
            {
              remark: 2,
              remark_description: 'There is little or no link between the higher order thinking and the activities related to the lesson.'
            },
            {
              remark: 3,
              remark_description: 'The teachers seldom facilitate higher-order thinking with well-planned activities'
            },
            {
              remark: 4,
              remark_description: 'The teacher plans for the explanation of the topic with well-planned and well-organized activities and facilitates higher-order thinking'
            },
          ]
        },
        {
          skill_type: "1.4 A well-planned collaborative learning activities",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The learning activities are opposite to the lesson objectives and are not well planned.'
            },
            {
              remark: 2,
              remark_description: 'The learning activities are not well planned to support collaborative learning.'
            },
            {
              remark: 3,
              remark_description: 'The learning activities are not well planned to support collaborative learning. '
            },
            {
              remark: 4,
              remark_description: 'The teacher facilitates well-planned and well-designed appropriate learning activities according to the objective of the lesson and facilitates collaborative learning.'
            },
          ]
        },
        {
          skill_type: "1.5 All the content presented in the lesson is described clearly in a sequence.",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The content of the lesson does not follow any sequence.'
            },
            {
              remark: 2,
              remark_description: 'The content of the lesson is presented in an inappropriately organized sequence.'
            },
            {
              remark: 3,
              remark_description: 'The content of the lesson is vague but very vaguely in a sequence'
            },
            {
              remark: 4,
              remark_description: 'The teacher organizes the lesson content clearly and precisely '
            },
          ]
        },
        {

          skill_type: "1.6 The instructions given in the classroom follow a logical sequence",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The instructions mentioned in the lesson plan are opposite to the lesson aims and objectives.'
            },
            {
              remark: 2,
              remark_description: 'The instructions mentioned in the lesson plan are not clear and do not follow a logical sequence'
            },
            {
              remark: 3,
              remark_description: 'The instructions mentioned in the lesson plan are vague and  seldom follow a logical sequence'
            },
            {
              remark: 4,
              remark_description: 'The instructions mentioned in the lesson plan follow a logical sequence '
            },
          ]
        },
        {

          skill_type: "1.7 The lesson plan includes appropriate resources",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The resources mentioned in the lesson plan are opposite to the lesson objective'
            },
            {
              remark: 2,
              remark_description: 'The resources mentioned in the lesson plan are not appropriate to the lesson objective'
            },
            {
              remark: 3,
              remark_description: 'The resources mentioned in the lesson plan seldom facilitate the lesson objective.'
            },
            {
              remark: 4,
              remark_description: 'The teachers have mentioned appropriate resources that facilitate effective learning in the classroom'
            },
          ]
        },
        {
          skill_type: "1.8 The resources are organized according to the need of the students and are arranged in a logical sequence",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The resources mentioned in the lesson plan are opposite and not in an organized sequence'
            },
            {
              remark: 2,
              remark_description: 'The resources mentioned in the lesson plan do not meet the learning needs of the students and create confusion.'
            },
            {
              remark: 3,
              remark_description: 'The resources mentioned in the lesson plan are not organized in a logical sequence. And seldom meets the learning needs of the students.'
            },
            {
              remark: 4,
              remark_description: 'The teachers use appropriate, well-organized resources like- teaching aids, models, etc. that facilitate effective learning'
            },
          ]
        }
      ],
      "Time Management Skill": [
        {
          skill_type: "2.1 The lesson plan shows different approaches to learning within a given time period",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The approaches mentioned are opposite to the learning needs and not at all time-bound'
            },
            {
              remark: 2,
              remark_description: 'The approach time-bound in the lesson plan is inappropriate and confusing.'
            },
            {
              remark: 3,
              remark_description: 'The different approaches mentioned in the lesson are unclear, vague, and lengthy'
            },
            {
              remark: 4,
              remark_description: 'The teacher has mentioned various approaches to learning in the lesson plan. They are achievable and meet the learning needs of the students.'
            },
          ]
        },
        {

          skill_type: "2.2 Variety of assessment techniques for the better learning experience",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The assessment techniques do not test the learning experience of the students. It is opposite to the learning objectives of the lesson.'
            },
            {
              remark: 2,
              remark_description: 'The assessment techniques used are not appropriate for the better learning experience'
            },
            {
              remark: 3,
              remark_description: 'The teacher mentions one or two assessment techniques for better learning'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses a variety of assessment techniques within a given time for better learning'
            },
          ]
        },
        {
          skill_type: "2.3 The teachers use extensive techniques to enhance the social, emotional, cultural, and academic needs of the students",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teacher is only involved in the completion of the syllabus the learning needs of students and the factors that affect their learning are completely ignored.'
            },
            {
              remark: 2,
              remark_description: 'Only academic needs are at focus all other needs of the students that impact their learning are ignored due to time constraints'
            },
            {
              remark: 3,
              remark_description: 'The teachers seldom try to understand any other needs except the academic needs of the students due to time constraints.'
            },
            {
              remark: 4,
              remark_description: 'The teachers take extra effort to understand the various needs of the student within a given time of their class'
            },
          ]
        },
        {

          skill_type: "2.4 The teachers include peer group learning for a better learning experience",
          selectOption: [
            {
              remark: 1,
              remark_description: 'No activities are involved in the teaching process'
            },
            {
              remark: 2,
              remark_description: 'The teacher avoids group learning activities due to time constrains'
            },
            {
              remark: 3,
              remark_description: 'The teacher seldom uses the peer group method of teaching any concept due to time constrains'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses the peer group learning method to clear the maximum concept of the lesson.'
            },
          ]
        },
        {
          skill_type: "2.5 The teacher starts a class by testing prior knowledge",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The concern of the teachers is to complete the syllabus prior knowledge is not tested'
            },
            {
              remark: 2,
              remark_description: 'The teachers directly start the class without testing the prior knowledge of the students due to time constraints.  '
            },
            {
              remark: 3,
              remark_description: 'The teacher seldom uses any method to test the students’ prior knowledge of the class due to time constrains'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses methods to test the prior knowledge before the beginning of the class'
            },
          ]
        },
        {
          skill_type: "2.6 The teacher ends the class with an assessment activity/task",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teachers are not able to meet the day’s objective. The lesson plan does not include any assessment activity or winding up tasks.'
            },
            {
              remark: 2,
              remark_description: 'The teacher uses lengthy and time-consuming tasks 10 min before the class ends which does not facilitate full participation'
            },
            {
              remark: 3,
              remark_description: 'The teacher seldom closes the class with any assessment or task'
            },
            {
              remark: 4,
              remark_description: 'There is always a conclusion given by the teacher before they end the class the last 10 min of the class is spent assessing what they have taught in the class have they met the objective of the day.'
            },
          ]
        }
      ],
      "Language Skill": [
        {
          skill_type: "3.1 The vocabulary used by the teachers is limited to a restricted number or few phrases necessary to convey the concept and help students to understand the concept.",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The vocabulary and phrases used in the lesson plan are inappropriate'
            },
            {
              remark: 2,
              remark_description: 'The vocabulary and phrases used in the lesson plan are vague and unclear'
            },
            {
              remark: 3,
              remark_description: 'The vocabulary and phrases used in the lesson plan do not match the objective of the lesson'
            },
            {
              remark: 4,
              remark_description: 'The lesson plan includes a few vocabulary or phrases to help the students understand the concepts clearly.'
            },
          ]
        },
        {
          skill_type: "3.2 The lesson plan includes an introduction, words, symbols, and phrases in a communicating language which facilitates effective learning.",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The language used in the classroom is inappropriate and unacceptable the classroom'
            },
            {
              remark: 2,
              remark_description: 'The lesson plan is full of jargon and confusing words.'
            },
            {
              remark: 3,
              remark_description: 'The teachers use advanced language words, symbols, and phrases in the classroom'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses communicative language in the classroom along with simple and easy words, symbols, and phrases.'
            },
          ]
        },
        {
          skill_type: "3.3 The vocabulary and syntax used in lesson activities help in knowledge building",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The vocabulary and syntax used are inappropriate and there is no knowledge-building taking place.'
            },
            {
              remark: 2,
              remark_description: 'The vocabulary and syntax used do not facilitate knowledge-building'
            },
            {
              remark: 3,
              remark_description: 'The vocabulary and syntax used seldom facilitate knowledge-building in the students'
            },
            {
              remark: 4,
              remark_description: 'The teachers use enough appropriate  vocabulary and syntax to facilitate knowledge building'
            },
          ]
        },
        {
          skill_type: "3.4 The lesson plan includes scaffolding strategies to help the learners meet the language learning demands.",
          selectOption: [
            {
              remark: 1,
              remark_description: 'There are no scaffolding strategies used by the teachers to facilitate language learning demands'
            },
            {
              remark: 2,
              remark_description: 'The scaffolding strategies used by the teachers do not meet the language learning demands of the students.'
            },
            {
              remark: 3,
              remark_description: 'The scaffolding strategies used by the teachers seldom meet the language learning demands'
            },
            {
              remark: 4,
              remark_description: 'The language used in designing the scaffolding strategies is simple and clear, it meets the learning demands of the students'
            },
          ]
        },
        {
          skill_type: "3.5 The teacher uses grammatically correct sentences with proper spacing and punctuation marks",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The sentences are grammatically incorrect. Spacing, punctuation, and spelling are ignored'
            },
            {
              remark: 2,
              remark_description: 'The grammar used in the lesson plan is mostly wrong. Sentences are not clear, many spelling mistakes are noticed, and spacing, punctuation, and handwriting need improvement.'
            },
            {
              remark: 3,
              remark_description: 'The lesson plan has a few grammatical errors. The spacing, font, and punctuation marks are not clear and sometimes inappropriate'
            },
            {
              remark: 4,
              remark_description: 'There are no grammatical errors in the lesson plan'
            },
          ]
        }
      ],
      "ICT Skills": [
        {
          skill_type: "4.1 The lesson plan includes appropriate ICT technologies that facilitate effective learning",
          selectOption: [
            {
              remark: 1,
              remark_description: 'No technologies are used by the  teachers to facilitate effective learning'
            },
            {
              remark: 2,
              remark_description: 'The teachers use inappropriate technologies to facilitate learning'
            },
            {
              remark: 3,
              remark_description: 'The technologies used by teachers seldom facilitate effective learning'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses enough appropriate ICT technologies that help in effective learning'
            },
          ]
        },
        {
          skill_type: "4.2 The planned activities are supported by ICT",
          selectOption: [
            {
              remark: 1,
              remark_description: 'ICT is not integrated into the learning activities for the students'
            },
            {
              remark: 2,
              remark_description: 'The ICT used by the teachers does not facilitate effective learning'
            },
            {
              remark: 3,
              remark_description: 'Teacher seldom uses ICT in their teaching to facilitate effective learning'
            },
            {
              remark: 4,
              remark_description: 'Most of the learning activities are supported by ICT to facilitate effective learning'
            },
          ]
        },
        {
          skill_type: "4.3 The teachers use enough ICT visuals for explaining the concepts",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teachers do not use any ICT visuals in their classroom'
            },
            {
              remark: 2,
              remark_description: 'The ICT visuals used by the teachers are inappropriate and do not facilitate effective learning'
            },
            {
              remark: 3,
              remark_description: 'Teachers seldom use ICT visuals in their classrooms for explaining the concept'
            },
            {
              remark: 4,
              remark_description: 'ICT visuals are one of the most frequently used methods used by teachers in the classroom'
            },
          ]
        },
        {
          skill_type: "4.4 the teacher uses ICT in the assessment of the students",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teachers do not use any ICT tools for assessment'
            },
            {
              remark: 2,
              remark_description: 'The teacher uses an inappropriate assessment tool'
            },
            {
              remark: 3,
              remark_description: 'The teacher seldom uses any ICT assessment tool'
            },
            {
              remark: 4,
              remark_description: 'The lesson plan includes appropriate ICT assessment tools which give immediate feedback to the students with suggestions'
            },
          ]
        }
      ]
    }

  assessmentFormDataValue = [
    {
      key: "Planning & Organizing Skills",
      value: [
        {
          skill_type: "1.1 The Lesson Plan includes achievable objectives, aims & targets based on the prior knowledge of the students according to the learning needs of the students",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teacher designs a lesson plan including aims, objectives, and targets without considering the learning needs and without considering the prior knowledge of the students.'
            },
            {
              remark: 2,
              remark_description: 'The teacher designs the lesson plan including aims, objectives, and targets common to the general idea of designing. They are cautious about the learning needs of the students.'
            },
            {
              remark: 3,
              remark_description: 'The teacher designs the lesson plan including aims, objectives, and targets according to the prior knowledge of the students. They are seldom cautious about the learning needs of the students.'
            },
            {
              remark: 4,
              remark_description: 'The teacher designs the lesson plan including aims, objectives, and targets according to the student’s prior knowledge They are cautious about the learning needs of the students.'
            },
          ]
        },
        {
          skill_type: "1.2 The instructional strategies are planned, organized, and aligned with the objectives, aims & targets of the lesson",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The instructional strategies are completely opposite to the aims, and objectives of the lesson.'
            },
            {
              remark: 2,
              remark_description: 'Opposite to the lesson’s aims and objectives'
            },
            {
              remark: 3,
              remark_description: 'Opposite to the lesson’s aims and objectives'
            },
            {
              remark: 4,
              remark_description: 'The instructional strategies are designed according to the aims, objectives & targets of the lesson'
            },
          ]
        },
        {
          skill_type: "1.3 The lesson plan includes well-planned activities that facilitate higher-order thinking",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The activities included in the lesson plan are opposite to the lesson and do not facilitate higher-order thinking.'
            },
            {
              remark: 2,
              remark_description: 'There is little or no link between the higher order thinking and the activities related to the lesson.'
            },
            {
              remark: 3,
              remark_description: 'The teachers seldom facilitate higher-order thinking with well-planned activities'
            },
            {
              remark: 4,
              remark_description: 'The teacher plans for the explanation of the topic with well-planned and well-organized activities and facilitates higher-order thinking'
            },
          ]
        },
        {
          skill_type: "1.4 A well-planned collaborative learning activities",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The learning activities are opposite to the lesson objectives and are not well planned.'
            },
            {
              remark: 2,
              remark_description: 'The learning activities are not well planned to support collaborative learning.'
            },
            {
              remark: 3,
              remark_description: 'The learning activities are not well planned to support collaborative learning. '
            },
            {
              remark: 4,
              remark_description: 'The teacher facilitates well-planned and well-designed appropriate learning activities according to the objective of the lesson and facilitates collaborative learning.'
            },
          ]
        },
        {
          skill_type: "1.5 All the content presented in the lesson is described clearly in a sequence.",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The content of the lesson does not follow any sequence.'
            },
            {
              remark: 2,
              remark_description: 'The content of the lesson is presented in an inappropriately organized sequence.'
            },
            {
              remark: 3,
              remark_description: 'The content of the lesson is vague but very vaguely in a sequence'
            },
            {
              remark: 4,
              remark_description: 'The teacher organizes the lesson content clearly and precisely '
            },
          ]
        },
        {

          skill_type: "1.6 The instructions given in the classroom follow a logical sequence",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The instructions mentioned in the lesson plan are opposite to the lesson aims and objectives.'
            },
            {
              remark: 2,
              remark_description: 'The instructions mentioned in the lesson plan are not clear and do not follow a logical sequence'
            },
            {
              remark: 3,
              remark_description: 'The instructions mentioned in the lesson plan are vague and  seldom follow a logical sequence'
            },
            {
              remark: 4,
              remark_description: 'The instructions mentioned in the lesson plan follow a logical sequence '
            },
          ]
        },
        {

          skill_type: "1.7 The lesson plan includes appropriate resources",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The resources mentioned in the lesson plan are opposite to the lesson objective'
            },
            {
              remark: 2,
              remark_description: 'The resources mentioned in the lesson plan are not appropriate to the lesson objective'
            },
            {
              remark: 3,
              remark_description: 'The resources mentioned in the lesson plan seldom facilitate the lesson objective.'
            },
            {
              remark: 4,
              remark_description: 'The teachers have mentioned appropriate resources that facilitate effective learning in the classroom'
            },
          ]
        },
        {
          skill_type: "1.8 The resources are organized according to the need of the students and are arranged in a logical sequence",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The resources mentioned in the lesson plan are opposite and not in an organized sequence'
            },
            {
              remark: 2,
              remark_description: 'The resources mentioned in the lesson plan do not meet the learning needs of the students and create confusion.'
            },
            {
              remark: 3,
              remark_description: 'The resources mentioned in the lesson plan are not organized in a logical sequence. And seldom meets the learning needs of the students.'
            },
            {
              remark: 4,
              remark_description: 'The teachers use appropriate, well-organized resources like- teaching aids, models, etc. that facilitate effective learning'
            },
          ]
        }
      ],
    },
    {
      key: "Time Management Skill",
      value: [
        {
          skill_type: "2.1 The lesson plan shows different approaches to learning within a given time period",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The approaches mentioned are opposite to the learning needs and not at all time-bound'
            },
            {
              remark: 2,
              remark_description: 'The approach time-bound in the lesson plan is inappropriate and confusing.'
            },
            {
              remark: 3,
              remark_description: 'The different approaches mentioned in the lesson are unclear, vague, and lengthy'
            },
            {
              remark: 4,
              remark_description: 'The teacher has mentioned various approaches to learning in the lesson plan. They are achievable and meet the learning needs of the students.'
            },
          ]
        },
        {

          skill_type: "2.2 Variety of assessment techniques for the better learning experience",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The assessment techniques do not test the learning experience of the students. It is opposite to the learning objectives of the lesson.'
            },
            {
              remark: 2,
              remark_description: 'The assessment techniques used are not appropriate for the better learning experience'
            },
            {
              remark: 3,
              remark_description: 'The teacher mentions one or two assessment techniques for better learning'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses a variety of assessment techniques within a given time for better learning'
            },
          ]
        },
        {
          skill_type: "2.3 The teachers use extensive techniques to enhance the social, emotional, cultural, and academic needs of the students",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teacher is only involved in the completion of the syllabus the learning needs of students and the factors that affect their learning are completely ignored.'
            },
            {
              remark: 2,
              remark_description: 'Only academic needs are at focus all other needs of the students that impact their learning are ignored due to time constraints'
            },
            {
              remark: 3,
              remark_description: 'The teachers seldom try to understand any other needs except the academic needs of the students due to time constraints.'
            },
            {
              remark: 4,
              remark_description: 'The teachers take extra effort to understand the various needs of the student within a given time of their class'
            },
          ]
        },
        {

          skill_type: "2.4 The teachers include peer group learning for a better learning experience",
          selectOption: [
            {
              remark: 1,
              remark_description: 'No activities are involved in the teaching process'
            },
            {
              remark: 2,
              remark_description: 'The teacher avoids group learning activities due to time constrains'
            },
            {
              remark: 3,
              remark_description: 'The teacher seldom uses the peer group method of teaching any concept due to time constrains'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses the peer group learning method to clear the maximum concept of the lesson.'
            },
          ]
        },
        {
          skill_type: "2.5 The teacher starts a class by testing prior knowledge",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The concern of the teachers is to complete the syllabus prior knowledge is not tested'
            },
            {
              remark: 2,
              remark_description: 'The teachers directly start the class without testing the prior knowledge of the students due to time constraints.  '
            },
            {
              remark: 3,
              remark_description: 'The teacher seldom uses any method to test the students’ prior knowledge of the class due to time constrains'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses methods to test the prior knowledge before the beginning of the class'
            },
          ]
        },
        {
          skill_type: "2.6 The teacher ends the class with an assessment activity/task",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teachers are not able to meet the day’s objective. The lesson plan does not include any assessment activity or winding up tasks.'
            },
            {
              remark: 2,
              remark_description: 'The teacher uses lengthy and time-consuming tasks 10 min before the class ends which does not facilitate full participation'
            },
            {
              remark: 3,
              remark_description: 'The teacher seldom closes the class with any assessment or task'
            },
            {
              remark: 4,
              remark_description: 'There is always a conclusion given by the teacher before they end the class the last 10 min of the class is spent assessing what they have taught in the class have they met the objective of the day.'
            },
          ]
        }
      ]
    },
    {
      key: "Language Skill",
      value: [
        {
          skill_type: "3.1 The vocabulary used by the teachers is limited to a restricted number or few phrases necessary to convey the concept and help students to understand the concept.",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The vocabulary and phrases used in the lesson plan are inappropriate'
            },
            {
              remark: 2,
              remark_description: 'The vocabulary and phrases used in the lesson plan are vague and unclear'
            },
            {
              remark: 3,
              remark_description: 'The vocabulary and phrases used in the lesson plan do not match the objective of the lesson'
            },
            {
              remark: 4,
              remark_description: 'The lesson plan includes a few vocabulary or phrases to help the students understand the concepts clearly.'
            },
          ]
        },
        {
          skill_type: "3.2 The lesson plan includes an introduction, words, symbols, and phrases in a communicating language which facilitates effective learning.",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The language used in the classroom is inappropriate and unacceptable the classroom'
            },
            {
              remark: 2,
              remark_description: 'The lesson plan is full of jargon and confusing words.'
            },
            {
              remark: 3,
              remark_description: 'The teachers use advanced language words, symbols, and phrases in the classroom'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses communicative language in the classroom along with simple and easy words, symbols, and phrases.'
            },
          ]
        },
        {
          skill_type: "3.3 The vocabulary and syntax used in lesson activities help in knowledge building",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The vocabulary and syntax used are inappropriate and there is no knowledge-building taking place.'
            },
            {
              remark: 2,
              remark_description: 'The vocabulary and syntax used do not facilitate knowledge-building'
            },
            {
              remark: 3,
              remark_description: 'The vocabulary and syntax used seldom facilitate knowledge-building in the students'
            },
            {
              remark: 4,
              remark_description: 'The teachers use enough appropriate  vocabulary and syntax to facilitate knowledge building'
            },
          ]
        },
        {
          skill_type: "3.4 The lesson plan includes scaffolding strategies to help the learners meet the language learning demands.",
          selectOption: [
            {
              remark: 1,
              remark_description: 'There are no scaffolding strategies used by the teachers to facilitate language learning demands'
            },
            {
              remark: 2,
              remark_description: 'The scaffolding strategies used by the teachers do not meet the language learning demands of the students.'
            },
            {
              remark: 3,
              remark_description: 'The scaffolding strategies used by the teachers seldom meet the language learning demands'
            },
            {
              remark: 4,
              remark_description: 'The language used in designing the scaffolding strategies is simple and clear, it meets the learning demands of the students'
            },
          ]
        },
        {
          skill_type: "3.5 The teacher uses grammatically correct sentences with proper spacing and punctuation marks",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The sentences are grammatically incorrect. Spacing, punctuation, and spelling are ignored'
            },
            {
              remark: 2,
              remark_description: 'The grammar used in the lesson plan is mostly wrong. Sentences are not clear, many spelling mistakes are noticed, and spacing, punctuation, and handwriting need improvement.'
            },
            {
              remark: 3,
              remark_description: 'The lesson plan has a few grammatical errors. The spacing, font, and punctuation marks are not clear and sometimes inappropriate'
            },
            {
              remark: 4,
              remark_description: 'There are no grammatical errors in the lesson plan'
            },
          ]
        }
      ],
    },
    {
      key: "ICT Skills",
      value: [
        {
          skill_type: "4.1 The lesson plan includes appropriate ICT technologies that facilitate effective learning",
          selectOption: [
            {
              remark: 1,
              remark_description: 'No technologies are used by the  teachers to facilitate effective learning'
            },
            {
              remark: 2,
              remark_description: 'The teachers use inappropriate technologies to facilitate learning'
            },
            {
              remark: 3,
              remark_description: 'The technologies used by teachers seldom facilitate effective learning'
            },
            {
              remark: 4,
              remark_description: 'The teacher uses enough appropriate ICT technologies that help in effective learning'
            },
          ]
        },
        {
          skill_type: "4.2 The planned activities are supported by ICT",
          selectOption: [
            {
              remark: 1,
              remark_description: 'ICT is not integrated into the learning activities for the students'
            },
            {
              remark: 2,
              remark_description: 'The ICT used by the teachers does not facilitate effective learning'
            },
            {
              remark: 3,
              remark_description: 'Teacher seldom uses ICT in their teaching to facilitate effective learning'
            },
            {
              remark: 4,
              remark_description: 'Most of the learning activities are supported by ICT to facilitate effective learning'
            },
          ]
        },
        {
          skill_type: "4.3 The teachers use enough ICT visuals for explaining the concepts",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teachers do not use any ICT visuals in their classroom'
            },
            {
              remark: 2,
              remark_description: 'The ICT visuals used by the teachers are inappropriate and do not facilitate effective learning'
            },
            {
              remark: 3,
              remark_description: 'Teachers seldom use ICT visuals in their classrooms for explaining the concept'
            },
            {
              remark: 4,
              remark_description: 'ICT visuals are one of the most frequently used methods used by teachers in the classroom'
            },
          ]
        },
        {
          skill_type: "4.4 the teacher uses ICT in the assessment of the students",
          selectOption: [
            {
              remark: 1,
              remark_description: 'The teachers do not use any ICT tools for assessment'
            },
            {
              remark: 2,
              remark_description: 'The teacher uses an inappropriate assessment tool'
            },
            {
              remark: 3,
              remark_description: 'The teacher seldom uses any ICT assessment tool'
            },
            {
              remark: 4,
              remark_description: 'The lesson plan includes appropriate ICT assessment tools which give immediate feedback to the students with suggestions'
            },
          ]
        }
      ]
    }
  ]

}
