<?php
class ModelCatalogProduct extends Model {
	public function addProduct($data) {
		$this->db->query("INSERT INTO oc_blog SET heading = '" . $this->db->escape($data['heading']) . "', image = '" . $this->db->escape($data['image']) . "', author = '" . $this->db->escape($data['author']) . "', date_publish = '" . $this->db->escape($data['date_publish']) . "', blog_content = '" . $this->db->escape($data['description']) . "'");
	}

	public function editProduct($blog_id, $data) {
		// echo '<pre>';print_r($data);exit;
		// echo '<pre>';print_r("UPDATE `oc_blog` SET heading = '" . $this->db->escape($data['heading']) . "',image = '" . $this->db->escape($data['image']) . "', author = '" . $this->db->escape($data['author']) . "', date_publish = '" . $this->db->escape($data['date_publish']) . "', blog_content = '" . $this->db->escape($data['description']) . "' WHERE id = '" . (int)$blog_id . "'");exit;
		$this->db->query("UPDATE `oc_blog` SET heading = '" . $this->db->escape($data['heading']) . "',image = '" . $this->db->escape($data['image']) . "', author = '" . $this->db->escape($data['author']) . "', date_publish = '" . $this->db->escape($data['date_publish']) . "', blog_content = '" . $this->db->escape($data['description']) . "' WHERE id = '" . (int)$blog_id . "'");
	}
	

	public function deleteProduct($blog_id) {
		$this->db->query("DELETE FROM oc_blog WHERE id = '" . (int)$blog_id . "'");
		
		$this->cache->delete('product');
	}

	public function getProduct($blog_id) {
		$query = $this->db->query("SELECT * FROM oc_blog WHERE id = " . (int)$blog_id);
		return $query->row;
	}

public function getProducts($data = array()) {
    $sql = "SELECT * FROM `oc_blog` WHERE 1";

    if (!empty($data['filter_heading'])) {
        $sql .= " AND `heading` LIKE '" . $this->db->escape($data['filter_heading']) . "%'";
    }
    if (!empty($data['filter_author'])) { 
        $sql .= " AND `author` LIKE '" . $this->db->escape($data['filter_author']) . "%'";
    }
    if (isset($this->request->get['filter_auther']) && $this->request->get['filter_auther'] !== '') {
        $sql .= " AND `author` LIKE '" . $this->db->escape($this->request->get['filter_auther']) . "%'";
    }
    if (isset($this->request->get['filter_heading_']) && $this->request->get['filter_heading_'] !== '') {
        $sql .= " AND `heading` LIKE '" . $this->db->escape($this->request->get['filter_heading_']) . "%'";
    }

    // Add order if needed (optional)
    $sql .= " ORDER BY date_publish DESC";

    //  Add LIMIT for pagination
    if (isset($data['start']) || isset($data['limit'])) {
        $start = (int)$data['start'];
        $limit = (int)$data['limit'];

        if ($start < 0) {
            $start = 0;
        }

        if ($limit < 1) {
            $limit = 20; // default fallback
        }

        $sql .= " LIMIT " . $start . "," . $limit;
    }

    $query = $this->db->query($sql);

    return $query->rows;
}

	public function getProductStores($blog_id) {
    return array(); // no store-specific blogs
}

	public function getTotalProducts($data = array()) {
		$sql = "SELECT COUNT(*) AS total FROM `oc_blog` WHERE 1"; // Start with WHERE 1 for easy AND concatenation
	
		// Filters from $data
		if (!empty($data['filter_heading'])) {
			$sql .= " AND `heading` LIKE '" . $this->db->escape($data['filter_heading']) . "%'";
		}
		if (!empty($data['filter_author'])) {
			$sql .= " AND `author` LIKE '" . $this->db->escape($data['filter_author']) . "%'";
		}
	
		// Filters from request (optional override)
		if (isset($this->request->get['filter_heading_']) && $this->request->get['filter_heading_'] !== '') {
			$sql .= " AND `heading` LIKE '" . $this->db->escape($this->request->get['filter_heading_']) . "%'";
		}
		if (isset($this->request->get['filter_author']) && $this->request->get['filter_author'] !== '') {
			$sql .= " AND `author` LIKE '" . $this->db->escape($this->request->get['filter_author']) . "%'";
		}
	
		$query = $this->db->query($sql);
	
		return (int)$query->row['total'];
	}
	

	
}
