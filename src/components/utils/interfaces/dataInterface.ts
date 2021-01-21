export default interface dataStructure {
    basicInfo: {
        name: string,
        dateofbirth: string,
        address: string,
        city: string,
        postcode: string,
        telephone: string,
        email: string
    },
    profile: {
        description: string
    },
    workingExperience: [
        {
            company0: string,
            role0: string,
            workingExperience0: string,
            workingDate0: string

        },
        {
            company1: string,
            role1: string,
            workingExperience1: string,
            workingDate1: string

        },
        {
            company2: string,
            role2: string,
            workingExperience2: string,
            workingDate2: string

        },
        {
            company3: string,
            role3: string,
            workingExperience3: string,
            workingDate3: string

        }
    ],
    education: [
        {
        school0: string,
        degree0: string,
        orientaton0: string,
        studyDate0: string
        },
        {
            school1: string,
            degree1: string,
            orientaton1: string,
            studyDate1: string
        },
        {
            school2: string,
            degree2: string,
            orientaton2: string,
            studyDate2: string
        },
        {
            school3: string,
            degree3: string,
            orientaton3: string,
            studyDate3: string
        },
    ],
    languages: [
        {
            language0: string,
            languageSkill0: string
        },
        {
            language1: string,
            languageSkill1: string
        },
        {
            language2: string,
            languageSkill2: string
        },
        {
            language3: string,
            languageSkill3: string
        },
    ],
    courses: [
        {
            course0: string,
            courseDate0: string
        },
        {
            course1: string,
            courseDate1: string
        },
        {
            course2: string,
            courseDate2: string
        },
        {
            course3: string,
            courseDate3: string
        },
    ],
    references: [
        {
            reference0: string,
            referenceContact0:string
        },
        {
            reference1: string,
            referenceContact1:string
        },
        {
            reference2: string,
            referenceContact2:string
        },
        {
            reference3: string,
            referenceContact3:string
        },
    ]

}
