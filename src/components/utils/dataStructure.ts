import dataInterface from './interfaces/dataInterface';
import unformattedData from './interfaces/unformattedData';

const dataStructure = (data:unformattedData):dataInterface => {
    let structuredData:dataInterface = {
        basicInfo: {
            name: data.name,
            dateofbirth: data.dateofbirth,
            address: data.address,
            city: data.city,
            postcode: data.postcode,
            telephone: data.telephone,
            email: data.email
        },
        profile: {
            description: data.description
        },
        workingExperience: [
            {
                company0: data.company0,
                role0: data.role0,
                workingExperience0: data.workingExperience0,
                workingDate0: data.workingDate0
            },
            {
                company1: data.company1,
                role1: data.role1,
                workingExperience1: data.workingExperience1,
                workingDate1: data.workingDate1
            },
            {
                company2: data.company2,
                role2: data.role2,
                workingExperience2: data.workingExperience2,
                workingDate2: data.workingDate2
            },
            {
                company3: data.company3,
                role3: data.role3,
                workingExperience3: data.workingExperience3,
                workingDate3: data.workingDate3
            }
        ],
        education: [
            {
            school0: data.school0,
            degree0: data.degree0,
            orientaton0: data.orientation0,
            studyDate0: data.studyDate0
            },
            {
                school1: data.school1,
                degree1: data.degree1,
                orientaton1: data.degree1,
                studyDate1: data.studyDate1
            },
            {
                school2: data.school2,
                degree2: data.degree2,
                orientaton2: data.orientation2,
                studyDate2: data.studyDate2
            },
            {
                school3: data.school3,
                degree3: data.degree3,
                orientaton3: data.orientation3,
                studyDate3: data.studyDate3
            },
        ],
        languages: [
            {
                language0: data.language0,
                languageSkill0: data.languageSkill0
            },
            {
                language1: data.language1,
                languageSkill1: data.languageSkill1
            },
            {
                language2: data.language2,
                languageSkill2: data.languageSkill2
            },
            {
                language3: data.language3,
                languageSkill3: data.languageSkill3
            },
        ],
        courses: [
        {
            course0: data.course1,
            courseDate0: data.courseDate1
        },
        {
            course1: data.course2,
            courseDate1: data.courseDate2
        },
        {
            course2: data.course3,
            courseDate2: data.courseDate3
        },
        {
            course3: data.course4,
            courseDate3: data.courseDate4
        },
    ],
    references: [
        {
            reference0: data.reference0,
            referenceContact0: data.referenceContact0
        },
        {
            reference1: data.reference1,
            referenceContact1: data.referenceContact1
        },
        {
            reference2: data.reference2,
            referenceContact2: data.referenceContact2
        },
        {
            reference3: data.reference3,
            referenceContact3: data.referenceContact3
        },
    ]
    }
    return structuredData;

}

export default dataStructure;