/** Dto */
const departmentDto = require("../../model/dto/department.dto");
const facultyDto = require("../../model/dto/faculty.dto")


exports.createDepartment = (req, res, next) => {
    let department = {
        code: req.body.code,
        name: req.body.name,
        director_name: req.body.director_name,
        faculty_id: req.body.faculty_id
    };
    departmentDto.create(department, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        )
    });
};

exports.updateDepartment = (req, res, next) => {
    let department = {
        code: req.body.code,
        name: req.body.name,
        director_name: req.body.director_name,
        faculty_id: req.body.faculty_id
    };
    departmentDto.update({ _id: req.body.id }, department, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        return res.status(201).json(
            {
                info: data
            }
        )
    });
};


exports.getAll = (req, res, next) => {
    departmentDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        )
    });
};

exports.getByCode = (req, res, next) => {
    departmentDto.getByCode({ document: req.params.document }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        )
    });
};


exports.deleteDepartment = () => {
    departmentDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json()
    });
};