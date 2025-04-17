package com.infosys.expenseManagementApplication.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.infosys.expenseManagementApplication.bean.Customer;

@Service
@Repository
public class CustomerDaoImpl implements CustomerDao {
    
    @Autowired
    private CustomerRepository repository;

    @Override
    public void save(Customer customer) {
        repository.save(customer);
    }

    @Override
    public Customer getCustomerById(String id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    @Override
    public String generateCustomerId() {
        Long id;
        String val = repository.getMaxCustomerId();

        if (val == null || val.trim().isEmpty()) {
            id = 100001L;
        } else {
            try {
                id = Long.parseLong(val.substring(1)) + 1;
            } catch (Exception e) {
                id = 100001L;
            }
        }

        return "C" + id;
    }

    @Override
    public List<Customer> getCurrentCustomers() {
        return repository.getCurrentCustomers();
    }

    @Override
    public String getCustomerStatusByUsername(String username) {
        return repository.getCutsomerStatusByUsername(username);
    }

    @Override
    public Customer getCustomerByUsername(String username) {
        return repository.getCustomerByUsername(username);
    }
}
