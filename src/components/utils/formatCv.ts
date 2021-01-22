import dataInterface from './interfaces/dataInterface';

const formatCv = (data:dataInterface):any => {
    let cvData = {
        basicInfo: {
            name: data.basicInfo.name,
            dateofbibrth: data.basicInfo.dateofbirth,
            address: data.basicInfo.address,
            city: data.basicInfo.city
        }
    };
}